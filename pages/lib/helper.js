export function getAllPosts(id) {
  const postData = [
    {id: 1, title: 'New Post', description: 'Post data from Static Props'},
    {id: 2, title: 'Second Post', description: 'Post data from Second Props'},
  ]
  if(id) {
    return postData?.filter(post => post.id.toString() === id)
  }
  return postData
}