import {useLocalStorage} from "../utilities/local_storage.jsx";

export function ExampleElement() {
	const [username, setUsername] = useLocalStorage("username", "nazwa użytkownika")

	function handleChange(e) {
		setUsername(e.target.value);
	}

	return (
		<div>
			<h1>{username}</h1>
			<input type="text" value={username} onChange={handleChange} />
			{/* <input type="button" value="cos" onClick={} /> */}
		</div>
	)
}