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
honda.comments = 'Fast Very Fast Bike!'
honda.photo_url = 'https://www.bikepics.com/pics/2015/01/04/bikepics-2716918-984.jpg'
honda.trade = false
honda.trade_details = ''
honda.contact = 'George'
honda.user_id = george.id
honda.save


jane = User.new
jane.name = "Jane of Jungle"
jane.email = "jj@12.com"
jane.password = "123456"
jane.nickname = "Swinger"
jane.comments = "I like the corners"
jane.photo_url = "https://mcn-images.bauersecure.com/upload/277201/images/540x360/WeronicaTeam2_800.jpg"
jane.save

south_ga = Ride.new
south_ga.ride_date = '02-22-2019'
south_ga.title = "South Georgia"
south_ga.description = "This will be a quick ride down to Valdosta"
south_ga.start_place = "Waffle House on 92"
south_ga.end_place = "Home"
south_ga.contact = "Jane"
south_ga.user_id = jane.id
south_ga.save

suzuki = Bike.new
suzuki.make = 'Suzuki'
suzuki.model = 'GSXR750'
suzuki.year = '2018/02/03'
suzuki.comments = 'Excelant Wheelie Bike!'
suzuki.photo_url = 'https://bmc.statics.d404.pl/uploads/article_images/c944x574/ac83a9821eefce2e3769330792ddf90b9f9b367e/gwiazda-stuntu-jessica-main-film.jpg'
suzuki.trade = false
suzuki.trade_details = ''
suzuki.contact = 'Jane'
suzuki.user_id = jane.id
suzuki.save

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