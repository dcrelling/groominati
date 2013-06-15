Then /^I should see a successful sign up message$/ do
  page.should have_content "A message with a confirmation link has been sent to your email address."
end