FROM nginx
LABEL email="fan_yawei@163.com"

RUN mkdir -p /var/www/html

ADD dist/ /var/www/html/

EXPOSE 80
EXPOSE 443