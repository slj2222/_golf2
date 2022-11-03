if Rails.env === 'production' 
    Rails.application.config.session_store :cookie_store, key: '_golf2', domain: 'golf2-react'
  else
    Rails.application.config.session_store :cookie_store, key: '_golf2' 
  end