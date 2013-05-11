class User < ActiveRecord::Base

  acts_as_followable
  acts_as_follower

  attr_accessible :email, :name
end
