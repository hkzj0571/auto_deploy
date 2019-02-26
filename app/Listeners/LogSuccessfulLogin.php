<?php

namespace App\Listeners;

use Illuminate\Auth\Events\Login;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Jenssegers\Agent\Agent;
use Zhuzhichao\IpLocationZh\Ip;

class LogSuccessfulLogin
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  Login $event
     * @return void
     */
    public function handle(Login $event)
    {
        $agent = new Agent();

        $event->user->signs()->create([
            'data' => [
                'ip'       => request()->getClientIp(),
                'device'   => $agent->device(),
                'location' => implode('·', array_filter(Ip::find(request()->getClientIp()))),
                'browser'  => $agent->browser(),
                'platform' => $agent->platform(),
            ],
        ]);
    }
}
