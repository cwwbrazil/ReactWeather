var React = require('react');


var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>This page is a project for learning React.</p>
      <p>
        <ul>
          <li>
            <p>This site is built with React and Foundation</p>
          </li>
          <li>
            <a href="http://foundation.zurb.com/sites/docs/"> Foundation docs </a>
          </li>
          <li>
            <a href="http://openweathermap.org">Open Weather Map</a> I used Open Weather Map to search for weather data by city name.
          </li>
        </ul>
      </p>
    </div>
  )
};
module.exports = About;
