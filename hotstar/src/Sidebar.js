import React from "react";



export default function Sidebar() {
  return (
    <>
      <div className="mc" style={{ display: "flex" }}>
        <div className="sidebar">
          <div className="logo">
            
            <svg width="56" height="41" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M23.294 32.845v6.12c0 .99.797 1.793 1.779 1.793v-7.913h1.556v-1.638h-1.556V28h-1.779v3.207h-.734v1.638h.735zM7.635 40.758v-5.19c0-2.05-.786-2.982-2.36-2.982-1.556 0-2.496 1.138-2.496 3v5.172H1V28c.982 0 1.779.803 1.779 1.793v2.431h.034c.565-.845 1.47-1.276 2.65-1.276 2.258 0 3.95 1.448 3.95 4.07v5.74H7.636zm8.51-8.172c-2.039 0-3.764 1.995-3.213 4.218.373 1.507 1.736 2.6 3.277 2.557 1.82-.05 3.289-1.516 3.289-3.413a3.345 3.345 0 0 0-3.352-3.362zm-.23 8.41c-2.646-.08-4.896-2.374-4.865-5.044.033-2.88 2.295-5.004 5.18-5.004 2.617 0 5.08 2.07 5.046 5.103-.035 2.602-2.238 5.042-5.36 4.946zm15.776-7.255c-.085-.69-.479-1.155-1.214-1.155-.684 0-1.112.466-1.112 1.017 0 .796.793 1.043 1.712 1.33l.05.015c1.334.414 2.565 1.224 2.565 3 0 1.845-1.334 3.052-3.18 3.052-1.71 0-3.353-1.172-3.353-3.38h1.779c.085 1.156.667 1.742 1.607 1.742.821 0 1.368-.535 1.368-1.31 0-.656-.495-1.087-1.607-1.449-2.326-.741-2.72-1.758-2.72-2.845 0-1.69 1.42-2.81 2.976-2.81 1.574 0 2.856 1.103 2.907 2.793h-1.778zm3.958-.896v6.12c0 .99.796 1.793 1.778 1.793v-7.913h1.556v-1.638h-1.556V28H35.65v3.207h-.735v1.638h.735zM47.859 36c0-1.862-1.334-3.414-3.3-3.414-1.877 0-3.393 1.71-3.219 3.73.144 1.665 1.494 3.012 3.152 3.045 1.879.038 3.367-1.529 3.367-3.361zm-.034 4.758v-1.482h-.034C47.124 40.414 45.927 41 44.576 41c-2.77 0-5.027-2.103-5.027-4.862 0-3.052 2.171-5.19 4.959-5.19 1.385 0 2.548.517 3.283 1.604h.034v-1.345h1.779v9.551h-1.779zm4.07-9.551v9.551c.983 0 1.78-.803 1.78-1.793v-3.568c0-1.604.786-2.552 2.325-2.604v-1.845c-1.248.07-1.984.483-2.411 1.12h-.034v-.861h-1.66z" fill="#fff"/><path d="m26.092 19.929.068.013c.445.04.891.145 1.31.304.31.119.567.357.702.647.27.53.283 1.15.04 1.705-.202.384-.54.7-.945.886-.378.172-.77.277-1.188.317a4.368 4.368 0 0 1-2.241-.396c-.405-.186-.891-.516-1.135-.939a.906.906 0 0 1 .041-1.004c.351-.476 1.107-.569 1.674-.555.554.04 1.094.132 1.62.29.216.067.419.159.608.278a.216.216 0 0 1 .067.198c-.094.278-.796.423-.985.463-.54.079-.824-.12-1.431-.357a2.25 2.25 0 0 0-.513-.132c-.27-.027-.608.053-.662.343-.027.159.162.291.297.357.284.132.608.198.918.198.959.014 2.025-.132 2.808-.674a.412.412 0 0 0 .216-.317c0-.277-.499-.45-.499-.45-.527-.21-1.499-.316-1.998-.356-.527-.04-1.35-.106-1.553-.145a2.539 2.539 0 0 1-.608-.146.788.788 0 0 1-.404-.45c-.068-.37.013-.752.229-1.056.527-.727 1.742-1.018 2.66-1.124.877-.106 2.309-.106 3.173.344.135.066.202.132.175.277a.662.662 0 0 1-.5.503c-.337.079-.675.119-1.026.119-1.04.052-2.308.026-3.307.29a.622.622 0 0 0-.257.106c-.162.172.284.211.392.238.027 0 .04.013.067.013l2.187.212zm-6.224-4.56s.176-.251.31-.436a8.58 8.58 0 0 1 1.08-1.123c.109-.093.244-.199.244-.199s-.203.013-.31.04c-.27.053-.662.304-.865.476-.324.277-.675.713-.526 1.11l.067.132zm1.81.476c.499-.04.998-.185 1.43-.423.433-.238 1.08-.714 1.013-1.256a.437.437 0 0 0-.283-.37c-.203-.08-.297-.066-.54 0-.149.04-.297.106-.432.185a6.601 6.601 0 0 0-1.607 1.375c-.095.119-.176.25-.257.33-.04.053-.08.106-.08.12.013.039.54.039.755.039zm-1.31.925a1.476 1.476 0 0 0-.162.277.639.639 0 0 1-.122.146c-.108.092-.27.092-.364 0l-.014-.013a.94.94 0 0 1-.297-.635v-.304c-.027-.145-.189-.29-.256-.436a1.489 1.489 0 0 1-.176-.634c-.027-.582.284-1.11.689-1.533a4.58 4.58 0 0 1 1.525-1.018c.554-.225 1.35-.383 1.958-.172.23.08.446.212.608.397.027.04.054.066.08.092.055.013.095.027.15.04.215.053.404.132.58.264.202.159.35.383.405.635.121.528-.203 1.123-.554 1.48a5.703 5.703 0 0 1-1.998 1.348 3.152 3.152 0 0 1-1.256.224c-.121-.013-.243-.04-.364-.052a1.338 1.338 0 0 1-.31-.08c-.082-.013-.109-.026-.122-.026zm.702 1.19c.027 0 .067.013.094.026.27.105.392.357.46.621.161.634.229 2.035.256 2.59.013.41.027.82.054 1.23.014.343.04.806-.027 1.123a.491.491 0 0 1-.216.317c-.19.08-.392.093-.594.053-.405-.08-.54-.33-.594-.727-.135-.925-.068-2.749.013-3.529.027-.25.122-1.07.257-1.4.027-.106.121-.331.297-.305zM8.824 19.505s-.594.04-1.013.079c-.702.08-1.404.211-2.079.423-.175.066-.513.198-.553.37-.04.172.08.317.202.462.068.08.486.476.594.569a10.65 10.65 0 0 0 2.187 1.295c.257.106.662.251.662.251s-.027-1.136-.027-2.273l.027-1.176zm10.99.449c.014.317-.013.648-.067.965-.04.211-.108.423-.176.634a5.913 5.913 0 0 1-.337.648c-.257.423-.58.793-.945 1.123-1.027.873-2.62 1.375-3.997 1.533-.999.12-1.998.093-2.984-.079-.337-.066-.837-.172-.837-.172s0 .198-.013.33c-.014.093-.04.199-.081.291a.46.46 0 0 1-.365.252c-.202.052-.418.04-.62-.027-.311-.132-.42-.423-.487-.753-.04-.265-.094-.727-.094-.727l-.432-.198c-.581-.291-1.148-.622-1.675-1.005-.135-.106-.729-.581-.864-.714a5.009 5.009 0 0 1-.945-1.11c-.189-.343-.256-.647-.108-1.004.203-.502.945-.886 1.445-1.097.648-.251 1.31-.45 1.998-.595.23-.026.58-.092.594-.106.014 0 .014-.013.014-.013.013-.013.027-.515.027-.7 0-.185.135-1.362.175-1.6.027-.132.122-.647.23-.792a.23.23 0 0 1 .297-.027c.54.33.715 1.494.756 2.075.027.357.04.899.04.899s.621-.013 1.013 0a8.87 8.87 0 0 1 1.175.132c.499.08 1.471.29 2.025.568.459.225.89.608 1.026 1.018.135.317.108.674-.081.965a1.362 1.362 0 0 1-1.067.674c-.121.013-.607-.053-.756-.172-.054-.053-.054-.119-.013-.185.121-.08.243-.146.364-.198a.515.515 0 0 0 .176-.12c.108-.092.202-.197.202-.316-.013-.16-.189-.252-.35-.318-.757-.29-2.283-.541-3.012-.581-.283-.013-.702-.027-.702-.027l.081 3.965s.338.066.608.106c.148.026.796.08.972.08 1.31.039 2.768-.08 3.983-.635a4.325 4.325 0 0 0 1.377-.952c.5-.568.742-1.308.675-2.061-.068-.846-.689-1.85-1.175-2.472-1.282-1.612-3.483-2.947-5.427-3.727a17.847 17.847 0 0 0-6.035-1.335c-.54-.013-1.728 0-2.323.172a1.819 1.819 0 0 1-.256.066.48.48 0 0 0-.19.08l-.026.026c-.014.013.04.013.067.04.068.026.324.04.473.066.121.013.23.079.297.171a.176.176 0 0 1 0 .225c-.135.159-.648.132-.864.106-.216-.027-.527-.106-.58-.304-.068-.238.053-.463.175-.674.243-.423.594-.648 1.12-.78a11.73 11.73 0 0 1 2.35-.357c1.566-.053 3.051.212 4.577.661.972.29 1.917.66 2.835 1.084a22.1 22.1 0 0 1 2.066 1.136c.162.106 1.147.807 1.296.939.31.25.729.621 1.026.912.58.568 1.296 1.427 1.647 2.114.081.159.149.33.257.516.08.185.162.37.216.568.027.106.067.278.067.278.108.171.135.343.162.515zm19.712-.872c-.729.172-2.66.264-2.66.264l-.242.74c.553-.04 1.107-.053 1.66-.013 0 0 .23-.026.257.251 0 .185 0 .357-.027.542 0 0-.014.172-.257.211-.27.04-2.079.106-2.079.106l-.297.978s-.108.225.135.159 2.133-.41 2.376-.357c.243.053.554.41.473.727-.108.396-1.998 1.573-3.16 1.493 0 0-.607.04-1.12-.766-.473-.767.175-2.207.175-2.207s-.297-.674-.08-.9c0 0 .134-.118.512-.145l.473-.938s-.527.04-.85-.344c-.298-.356-.325-.528-.095-.634.23-.106 2.444-.515 3.97-.462 0 0 .526-.053.985.845 0 0 .216.37-.149.45zm-5.724 3.621c-.19.45-.716.925-1.35.634-.635-.29-1.62-2.312-1.62-2.312s-.379-.754-.46-.727c0 0-.08-.146-.135.674-.054.82.014 2.405-.324 2.656a.588.588 0 0 1-.823-.053c-.027-.026-.04-.053-.068-.092-.175-.291-.256-.978-.162-2.18.095-1.204.405-2.499.77-2.895.364-.397.661-.106.77 0 0 0 .485.436 1.296 1.718l.134.238s.73 1.202.81 1.202c0 0 .055.053.109.014.08-.027.04-.41.04-.41s-.148-1.308-.824-3.542a1.05 1.05 0 0 1-.026-.542c.067-.264.337-.145.337-.145s1.04.515 1.54 2.167c.499 1.652.188 3.159-.014 3.595zm11.179-.991c-.473.806-1.81 2.498-3.578 2.101a17.728 17.728 0 0 0-1.364 4.89s-.067.41-.405.265c-.337-.12-.904-.675-1.026-1.454-.121-1.018.338-2.736 1.283-4.705-.27-.436-.46-1.057-.31-1.956 0 0 .242-1.652 1.944-3.146 0 0 .202-.171.324-.119.121.053.067.595-.04.86-.109.264-.865 1.546-.865 1.546s-.473.859-.338 1.546c.892-1.335 2.917-4.044 4.172-3.185.419.29.622.938.622 1.625a3.569 3.569 0 0 1-.42 1.732zm-.378-2.128s-.068-.529-.608.053a12.68 12.68 0 0 0-1.944 2.683c.58-.066 1.12-.291 1.58-.635.324-.277 1.093-1.057.972-2.101zm10.126-.119h-3.24a25.474 25.474 0 0 0-.405-3.212.258.258 0 0 0-.244-.198h-.742a.24.24 0 0 0-.176.08c-.04.052-.054.119-.04.185.216 1.044.351 2.088.405 3.158h-3.119c-.148 0-.27.106-.27.251v.674c0 .146.122.265.27.265h3.173v.45c0 .871-.04 1.757-.135 2.616a.24.24 0 0 0 .216.264h.716a.26.26 0 0 0 .256-.238c.095-.885.135-1.77.135-2.656v-.45h3.2c.148 0 .27-.118.27-.264v-.66c.014-.16-.108-.278-.27-.265z" fill="#fff"/><path d="M50.324 14.614c-4.726-12-17.971-17.759-29.573-12.877-4.218 1.769-7.82 4.811-10.34 8.717a.293.293 0 0 0-.028.24.283.283 0 0 0 .164.17l.589.212c.041.014.069.014.11.014.11 0 .219-.056.274-.155C18.175.803 31.558-1.843 41.38 5.048a22.083 22.083 0 0 1 7.724 9.722c.055.113.165.198.288.198h.712a.25.25 0 0 0 .247-.255c-.014-.042-.014-.07-.027-.099z" fill="url(#a)"/><defs><radialGradient id="a" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(38.1794 0 0 39.4429 49.677 14.937)"><stop offset=".01" stop-color="#fff"/><stop offset=".04" stop-color="#C6FFFF"/><stop offset=".09" stop-color="#80FFFF"/><stop offset=".13" stop-color="#49FFFF"/><stop offset=".17" stop-color="#21FFFF"/><stop offset=".2" stop-color="#09FFFF"/><stop offset=".22" stop-color="#0FF"/><stop offset=".28" stop-color="#01F6FF" stop-opacity=".96"/><stop offset=".39" stop-color="#04DEFF" stop-opacity=".87"/><stop offset=".53" stop-color="#08B6FF" stop-opacity=".71"/><stop offset=".69" stop-color="#0E7FFF" stop-opacity=".5"/><stop offset=".87" stop-color="#1639FF" stop-opacity=".22"/><stop offset="1" stop-color="#1C00FF" stop-opacity="0"/></radialGradient></defs></svg>
          </div>
          <div className="subscribe">
            <button className="button">
              Subscribe <span>›</span>
            </button>
          </div>
          <div className="icons" id="ic">
            <i className="fa-solid fa-user"></i>
          </div>
          <div className="icons" >
            <i className="fa-solid fa-search"></i>
          </div>
          <div className="icons">
            <i className="fa-solid fa-home"></i>{" "}
          </div>
          <div className="icons">
            <i className="fa-solid fa-tv"></i>
          </div>
          <div className="icons">
            <i className="fa-solid fa-film"></i>{" "}
          </div>
          <div className="icons">
            <i className="fa-sharp fa-solid fa-basketball"></i>{" "}
          </div>
        </div>
        <div className="names">
          <div className="info" id="in">My Space</div>
          <div className="info">Search</div>
          <div className="info">Home </div>
          <div className="info">Tv</div>
          <div className="info">Movies </div>
          <div className="info">Sport </div>
        </div>
        
      </div>
      
    </>
  );
}
