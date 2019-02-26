<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class LogsController extends Controller
{
    /**
     * Fiels
     *
     * @return \Dingo\Api\Http\Response
     */
    public function index()
    {
        return $this->response->array(['data' => $this->getFiles()]);
    }

    /**
     * Detail
     *
     * @param Request $request
     * @param $log
     * @return mixed
     */
    public function show(Request $request, $log)
    {
        $f = fopen(storage_path('logs/' . $log), 'rb');

        $output = '';

        while (!feof($f)) {
            $output = $output . ($chunk = fread($f, 4096));
        }

        return $this->response->array(['data' => $this->parse($output)]);
    }

    /**
     * Parse log file content
     *
     * @param $raws
     * @return array
     */
    protected function parse($raws)
    {
        $pattern = '/\[(\d{4}(?:-\d{2}){2} \d{2}(?::\d{2}){2})\] (\w+)\.(\w+):((?:(?!{"exception").)*)?/';

        $logs = preg_split($pattern, trim($raws), -1, PREG_SPLIT_DELIM_CAPTURE | PREG_SPLIT_NO_EMPTY);

        foreach ($logs as $index => $log) {
            if (preg_match('/^\d{4}/', $log)) break;
            unset($logs[$index]);
        }

        if (empty($logs)) return [];

        $parsed = [];

        foreach (array_chunk($logs, 5) as $log) {
            $parsed[] = [
                'time'  => $log[0] ?? '',
                'env'   => $log[1] ?? '',
                'level' => $log[2] ?? '',
                'message'  => $log[3] ?? '',
                'trace' => trim($log[4] ?? ''),
            ];
        }

        unset($logs);

        rsort($parsed);

        return $parsed;
    }

    /**
     * Get log files
     *
     * @return array
     */
    protected function getFiles()
    {
        $files = glob(storage_path('logs/*'));
        $files = array_combine($files, array_map('filemtime', $files));
        krsort($files, SORT_STRING);
        return array_map('basename', array_keys($files));
    }
}
