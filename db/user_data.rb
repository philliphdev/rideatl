def get_user_data
    user_data = {
      'george' => {
        name: 'George Jungle',
        email: 'gj@12.com',
        password: '123456',
        nickname: 'Treez',
        comments: 'I like to go fast!',
        photo_url: 'http://thecatapi.com/api/images/get?format=src&type=gif'
        },
        
        'jane' => {
            name: 'Jane Jungle',
            email: 'jj@12.com',
            password: '123456',
            nickname: 'Swinger',
            comments: 'I like to go slow!',
            photo_url: 'http://thecatapi.com/api/images/get?format=src&type=gif'
        }
    }

  return user_data
end