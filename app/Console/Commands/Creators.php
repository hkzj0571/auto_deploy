<?php

namespace App\Console\Commands;

use App\Models\Admin;
use Illuminate\Console\Command;

class Creators extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'create {channel} {name?}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create something';

    /**
     * The method prefix
     *
     * @var string
     */
    protected $method_prefix = 'create';

    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $method = $this->getInternalMethodName();

        return method_exists(self::class, $method) ? $this->$method() : $this->info('channel not exists');
    }

    /**
     * Create a Transformer
     */
    public function createTransformer($name = null)
    {
        $name = $name ?: $this->argument('name');

        // Missing parameter
        if (!$name) return $this->error('Please input Transformer Model');

        /**
         * Replace variable
         */
        $stub = str_replace(
            '{name}',
            strtolower($name),
            str_replace(
                '{NAME}',
                ucfirst($name),
                file_get_contents(__DIR__ . '/stubs/transformer.stub')
            )
        );

        // Replacement file
        file_put_contents($file_path = app_path('Transformers/' . ucfirst($name) . 'Transformer.php'), $stub);

        $this->info("Transformer Created: $file_path");
    }

    /**
     * Create controller
     */
    public function createController($name = null, $namespace = null)
    {
        $name = $name ?: $this->argument('name');

        $namespace = $namespace ?: $this->ask('namespace', null);

        // Missing parameter
        if (!$name) return $this->error('Please input Transformer Model');

        /**
         * Replace variable
         */
        $stub = str_replace(
            '{namespace}',
            $namespace ? '\\' . $namespace : null,
            str_replace(
                '{name}',
                $name,
                file_get_contents(__DIR__ . '/stubs/controller.stub')
            )
        );

        $path = $namespace ? $namespace . '/' : null;

        // Replacement file
        file_put_contents($file_path = app_path('Http/Controllers/' . $path . $name . 'sController.php'), $stub);

        $this->info("Controller Created: $file_path");
    }

    /**
     * Create Resource
     */
    public function createResource()
    {
        $name = $this->argument('name');
        $namespace = $this->ask('Please input Resource Namespace');

        $this->createTransformer($name);
        $this->createController($name, $namespace);
        $this->info('Resource Created!');
    }

    /**
     * Create a admin
     */
    public function createAdmin()
    {
        $name = $this->ask('Please input your Name', 'Admin');
        $mobile = $this->ask('Please input your Name', '13888888888');
        $password = $this->ask('Please input your Password', '123456');

        Admin::create([
            'avatar'   => '/images/avatar.jpg',
            'name'     => $name,
            'mobile'   => $mobile,
            'password' => $password,
        ]);

        $this->info('A admin Created!');
        $this->info('Name: ' . $name);
        $this->info('Mobile: ' . $mobile);
        $this->info('Password: ' . $password);
    }

    /**
     * Return internal function full name
     *
     * @return string
     */
    protected function getInternalMethodName()
    {
        return $this->method_prefix . ucfirst($this->argument('channel'));
    }
}
