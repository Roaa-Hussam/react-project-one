// import  myImage from ('/home/roaa/react/project-one/src/assets/icat.jpg')
// import myImage from ('./icat.jpg')
function Hello() {
  return (
    <div className="image">
      {/* <img src={ myImage} alt="Description of the image" /> */}
      <img src="../public/icat.jpg" alt="Description of the image" />
      <h1>Hello</h1>
    </div>
  )
}

export default Hello
