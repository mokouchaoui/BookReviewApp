FROM php:8.1-apache

COPY . /var/www/html

RUN docker-php-ext-install pdo pdo_mysql

# Apache serves on port 80 by default, but if needed, expose another port
EXPOSE 80
