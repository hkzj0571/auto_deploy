<?php

if (!function_exists('_config')) {

    /**
     * Get custom config
     *
     * @param $name
     * @param null $default
     * @param bool $is_full
     * @return null
     */
    function _config($name, $default = null, $is_full = false)
    {
        return \App\Models\Config::_config($name, $default, $is_full);
    }
}

if (!function_exists('int')) {
    function int($int)
    {
        return sprintf('%.2f', $int);
    }
}
