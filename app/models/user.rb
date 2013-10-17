class User < ActiveRecord::Base

  has_one :user_profile, :dependent => :destroy
  has_many :posts, :dependent => :destroy
  accepts_nested_attributes_for :user_profile
  acts_as_follower
  acts_as_followable

  # Include default devise modules. Others available are:
  # :token_authenticatable, :confirmable,
  # :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  # Setup accessible (or protected) attributes for your model
  attr_accessible :email, :password, :password_confirmation, :remember_me, :user_profile_attributes


end
