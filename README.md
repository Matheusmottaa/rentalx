# Car Rent API 

## How To Install 

Clone repository using:

`$ git clone https://github.com/Matheusmottaa/rentalx`

access the directory, using: 

`$ cd rentalx`


install the dependencies: 

`$ yarn `

or 

`npm install`

run docker using: 

`$ sudo docker-compose up `

## Principles 

- Single Responsibility Principle (SRP)
- Open Closed Principle (OCP)
- Liskov Substitution Principle (LSP)
- Interface Segregation Principle (ISP)
- Dependency Inversion Principle (DIP)
- CI/CD with github actions 
## Car registration

[x] - It must be possible to register a new car. 

[x] - It should not be possible to register a car with a non-existing license plate. 

[x] - It should not be possible to change the license plate of an already registered car. 

[x] - The user responsible for the registration must be an admin.

## Car listing 

[x] - The user does not need to be logged into the system.

[x] - It should be possible to list all available cars

[x] - It should be possible to list all available cars by category name

[x] - It should be possible to list all available cars by brand name.

[x] - It should be possible to list all available cars by car name

## Car specification record

[x] - It must be possible to register a specification for a car. 

[x] - It should not be possible to register a specification for an unregistered car.

[x] - It should not be possible to register an existing specification for the same car.

[x] - The user responsible for the registration must be a user admin.

## Car image registration

[x] - It must be possible to register the image of the car. 

[x] - The user must be able to register more than one image for the same car

[x] - The user responsible for the registration must be an administrator user.

## Car rental 

[x] - It must be possible to register a rental. 

[x] - The rental must have a minimum duration of 24 hrs.

[x] - It should not be possible to register a new lease if there is already one open for the same user. 

[x] - It should not be possible to register a new rental if there is already one open for the same car. 

[x] - The user must be logged into the application. 

[x] - When making a rental, the car's status must be - changed to unavailable. 

## Rental car return 

[x] - It must be possible to return a car. 

[x] - If the car is returned less than 24 hours later, the full day will be charged.

[x] - When making the return, the car must be released for another rental.

[x] - When making the return, the user must be released - for another rental.

[x] - When making the return, the total rent must be calculated.

## Forgot password

[x] - It must be possible for the user to recover the password by informing the e-mail. 

[x] - The user should receive an email with the step-by-step instructions for password recovery.

[x] - The user should be able to enter a new password. 

[x] - User needs to enter a new password. 

[x] - Link sent for recovery must expire in 3 hours. 
