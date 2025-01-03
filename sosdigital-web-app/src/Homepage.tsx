import UserAuthcompoenent from "./UserAuthcompoenent";


function Homepage({ setuserid }: { setuserid: React.Dispatch<React.SetStateAction<number | undefined>> }) {
  return <>
    <div>

      <p> Welcome to Sos digital</p>
      <p> To get starded for Homepage clicked Login Button </p>
      <button type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Login
      </button>
      <UserAuthcompoenent setuserid={setuserid} />
    </div>
  </>
}

export default Homepage;