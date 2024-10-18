import React from "react";

type User = {
  id: number;
  name: string;
  isAdmin: boolean;
};

const UserAccount = ({ user }: { user: User }) => {
  return (
    <div>
      <h2>User Profile</h2>
      {user?.isAdmin && <button>edit</button>}

      <div>
        <strong>Name:</strong>
        {user?.name}
      </div>
    </div>
  );
};

export default UserAccount;
