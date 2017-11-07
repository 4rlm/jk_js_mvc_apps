Tweet.destroy_all

100.times do
  username = Faker::Internet.user_name
  Tweet.create!(username:   "@#{username}",
                content:    Faker::Lorem.sentences(2).join(" ")[0..rand(80..140)])
end
