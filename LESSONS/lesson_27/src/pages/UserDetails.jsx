import { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

const UserDetails = () => {
  const { id } = useParams();

  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchUser = useCallback(async () => {
    try {
      setIsLoading(true);
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );

      const data = await res.json();
      setUser(data);
    } catch (err) {
      console.log("Error while fetching user", err);
    } finally {
      setIsLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  if (isLoading) {
    return <p className="p-8 text-gray-400 text-center">Loading...</p>;
  }

  return (
    <div>
      <div className="p-8 text-white">
        <div className="bg-gray-800 p-4 rounded">
          <p>
            <strong className="text-gray-400">Email:</strong> {user?.email}
          </p>

          <p>
            <strong className="text-gray-400">Phone:</strong> {user?.phone}
          </p>

          <p>
            <strong className="text-gray-400">City:</strong>{" "}
            {user?.address?.city}
          </p>
        </div>

        <Link
          to="/users"
          className="inline-block mt-6 text-blue-400 hover:underline">
          ⬅️ Back to users
        </Link>
      </div>
    </div>
  );
};

export default UserDetails;
