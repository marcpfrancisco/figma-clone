#!/bin/bash
php artisan key:generate
php artisan migrate --force
php artisan config:cache
php artisan route:cache
exec "$@"
