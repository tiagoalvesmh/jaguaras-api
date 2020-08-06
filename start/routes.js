'use strict'

const Route = use('Route')

Route.post('/users', 'UserController.create')
Route.post('/sessions', 'SessionController.create')

Route.group(() => {
  Route.resource('cities', 'CityController')
    .apiOnly()
  
  Route.resource('gyms', 'GymController')
    .apiOnly()

  Route.resource('courts', 'CourtController')
    .apiOnly()

  Route.resource('matches', 'MatchController')
    .apiOnly()
  
  Route.resource('schedules', 'ScheduleController')
    .apiOnly()
  
  Route.resource('clubs', 'ClubController')
    .apiOnly()
}).middleware('auth')