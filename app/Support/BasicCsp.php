<?php

namespace App\Support;

use Spatie\Csp\Directive;
use Spatie\Csp\Policies\Basic;

class BasicCsp extends Basic
{
    public function configure()
    {
        if (app()->isLocal()) {
            // No csp protection when app env is local
            return true;
        }

        parent::configure();

        $this->addDirective(Directive::STYLE, 'fonts.bunny.net');
        $this->addDirective(Directive::FONT, 'fonts.bunny.net');
    }
}
