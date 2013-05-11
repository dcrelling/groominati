class User < ActiveRecord::Base

  acts_as_followable
  acts_as_follower

  attr_accessible :email, :name, :avatar
  has_attached_file :avatar, :styles => { :medium => "300x300>", :thumb => "100x100>" }, :default_url => "/images/:style/missing.png"

end
