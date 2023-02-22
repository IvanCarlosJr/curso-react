import { Outlet, useParams, useSearchParams } from 'react-router-dom';
import './style.css';

export const Posts = () => {
  const params = useParams();
  const { id } = params;

  return (
    <div>
      <h1>
        Post {id}
      </h1>
      <Outlet />
    </div>
  );
};