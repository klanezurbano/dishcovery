import axios from "axios";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../store/loggedInUserReducer";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loggedInUser = useSelector(state => state.loggedInUser);

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: async (value) => {
      try {
        const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/v1/login`, {
          username: value.username,
          password: value.password,
        },
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          }
        })

        if (res.status === 200) {
          dispatch(setUser(res.data.user));
        }
      } catch (err) {
        // show error
        console.log('Something went wrong');
      }
    }
  })

  useEffect(() => {
    if (loggedInUser) {
      navigate('/meal-gallery');
    }
  }, [loggedInUser])

  return (
    <>
      
      <form onSubmit={formik.handleSubmit} className="w-50">
          <div className="mb-3 row">
            <label htmlFor="title" className="form-label col-3">Username: </label>
            <div className="col-9">
              <input type="text"
                className="form-control"
                id="username"
                placeholder="Enter username..."
                value={formik.values.username}
                onChange={formik.handleChange}
              />
              {
                formik.errors.title && <span className="text-danger">{formik.errors.username}</span>
              }
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="title" className="form-label col-3">Password: </label>
            <div className="col-9">
              <input type="password"
                className="form-control"
                id="password"
                value={formik.values.password}
                onChange={formik.handleChange}
              />
              {
                formik.errors.title && <span className="text-danger">{formik.errors.password}</span>
              }
            </div>
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-primary w-25">Login</button>
          </div>
        </form>
    </>
  )
}

export default LoginPage;