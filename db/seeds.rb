Ride.destroy_all
Bike.destroy_all
User.destroy_all

george = User.new
george.name = "George of Jungle"
george.email = "gj@12.com"
george.password = "123456"
george.nickname = "Treez"
george.comments = "I like to go FAST!"
george.photo_url = "http://thecatapi.com/api/images/get?format=src&type=gif"

george.save

north_ga = Ride.new
north_ga.ride_date = '01-22-2019'
north_ga.title = "North Georgia"
north_ga.description = "This will be a quick ride up to Hellen and back"
north_ga.start_place = "Waffle House on 92"
north_ga.end_place = "Home"
north_ga.contact = "George"
north_ga.user_id = george.id
north_ga.save

honda = Bike.new
honda.make = 'Honda'
honda.model = 'CBR600'
honda.year = '1991/02/03'
honda.comments = 'Excelant Wheelie Bike!'
honda.photo_url = 'https://www.bikepics.com/pics/2015/01/04/bikepics-2716918-984.jpg'
honda.trade = false
honda.trade_details = ''
honda.contact = 'George'
honda.user_id = george.id
honda.save

# require_relative './ride_data.rb'
# require_relative './user_data.rb'

# Ride.destroy_all
# User.destroy_all

# ride_data = get_ride_data
# user_data = get_user_data

# ride_data.each_pair do |user_name, rides|
#   info = user_data[user_name]
#   puts "HI", user_name, rides
#   current_user = User.create!({
#     name:         info[:name],
#     email:        info[:email],
#     password:     info[:password],
#     nickname:     info[:nickname],
#     comments:     info[:comments],
#     photo_url:    info[:photo_url],
#     rides:        info[:rides]
#   })

#   rides.each do |ride|
#     Ride.create!({
#       ride_date:    ride[:ride_date],
#       title:        ride[:title],
#       description:  ride[:description],
#       start_place:  ride[:start_place],
#       end_place:    ride[:end_place],
#       contact:      ride[:preview_link],
#       user:         current_user
#     })
#   end
# end