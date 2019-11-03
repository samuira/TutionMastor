#!/bin/sh
python manage.py makemigrations
python manage.py migrate
python manage.py collectstatic --noinput
python manage.py shell -c "from custom_admin.models import User; User.objects.create_superuser('admin@example.com', 'adminpass')"
/usr/local/bin/gunicorn WorkForce.wsgi:application -w 2 -b :8000
exec "$@"