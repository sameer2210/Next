const pageNotFound = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-red-500">404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <p>
        pageNotFound ka page next mai 404 ke naam se bana hota hai. Agar aap
        kisi bhi page ko access karte ho jo exist nahi karta, toh yeh page
        automatically render hota hai.
      </p>
    </div>
  );
};

export default pageNotFound;
