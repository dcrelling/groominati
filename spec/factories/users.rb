FactoryGirl.define do
  factory :user do
    name 'Test User'
    email 'example@example.com'
    password 'n0t3b00k'
    password_confirmation 'n0t3b00k'
    # required if the Devise Confirmable module is used
    # confirmed_at Time.now
  end
end