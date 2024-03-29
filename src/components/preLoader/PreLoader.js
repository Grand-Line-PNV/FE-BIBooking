import React, { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import "./style.css";
export default function PreLoader() {
	const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);
  return (
    <div className="preloader">
		<div className="icon-loading">
			<svg className="svg" viewBox="0 0 102 102" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path class="big-circle" d="M101 51C101 78.6142 78.6142 101 51 101C23.3858 101 1 78.6142 1 51" stroke="#252525" stroke-width="2"/>
				<path class="small-circle" d="M91 51C91 28.9086 73.0914 11 51 11C28.9086 11 11 28.9086 11 51" stroke="#252525" stroke-width="2"/>
			</svg>
		</div>
	</div>
  );
}
