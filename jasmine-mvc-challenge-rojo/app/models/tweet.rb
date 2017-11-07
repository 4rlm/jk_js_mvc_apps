class Tweet < ActiveRecord::Base
  validates_presence_of :content, :username
  validates_length_of :content, maximum: 140
  validates_format_of :username, with: /\A@.*/

  before_create :set_avatar

  def set_avatar
    self.avatar_url = Faker::Avatar.image(username, "50x50")
  end
end
