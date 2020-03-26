// async componentDidMount() {
//   this.setState({ loading: true });

//   const res = await axios.get(
//     `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
//   );

//   this.setState({ users: res.data, loading: false });
// }

//searh github users
// const searchUsers = async text => {
//   setLoading(true);

//   const res = await axios.get(
//     `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
//   );
//   setUsers(res.data.items);
//   setLoading(false);
// };

// Get single user
// const getUser = async username => {
//   setLoading(true);

//   const res = await axios.get(
//     `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
//   );
//   setUser(res.data);
//   setLoading(false);
// };

// get user repo
// const getUserRepos = async username => {
//   // setLoading(true);

//   const res = await axios.get(
//     `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
//   );
//   setRepos(res.data);
//   // setLoading(false);
// };

// const clearUsers = () => {
//   setUsers([]);
//   setLoading(false);
// };

// const showAlert = (msg, type) => {
//   setAlert({ msg, type });

//   setTimeout(() => setAlert(null), 5000);
// };
