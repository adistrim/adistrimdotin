build:
	docker-compose build

up:
	docker-compose up

up-detached:
	docker-compose up -d

down:
	docker-compose down

restart:
	docker-compose down && docker-compose up --build

build-adistrim:
	docker-compose build adistrim

build-admin:
	docker-compose build admin

up-adistrim:
	docker-compose up adistrim

up-admin:
	docker-compose up admin

stop-adistrim:
	docker-compose stop adistrim

stop-admin:
	docker-compose
