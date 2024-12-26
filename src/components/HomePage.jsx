function HomePage() {
    return (
      <div className="relative min-h-screen flex items-center justify-center font-quicksand text-4xl text-pink-50 bg-white/95 backdrop-blur-lg overflow-hidden" 
      style={{
        backgroundImage: 'url(https://www.transparenttextures.com/patterns/axiom-pattern.png)',
        backgroundSize: '',
    }}
      >
        {/* <div className="absolute inset-0 -z-10">
          <div className="absolute top-10 left-20 w-72 h-72 bg-orange-300 rounded-full filter blur-3xl opacity-40"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-pink-300 rounded-full filter blur-3xl opacity-50"></div>
        </div> */}
  
        <div className="relative z-10 flex flex-col items-center text-gray-700 space-y-4">
          <div>Do You Have a</div>
          <div className="font-extrabold text-6xl text-gray-700">Ui Sense</div>
          <div>?</div>
        </div>
      </div>
    );
  }
  
  export default HomePage;
  