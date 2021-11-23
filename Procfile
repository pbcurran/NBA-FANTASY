web gunicorn backend.wsgi --log-file -
heroku ps:scale web=1 -a quest-for-the-belt
heroku run python manage.py migrate -a quest-for-the-belt
heroku run python manage.py runserver -a quest-for-the-belt

