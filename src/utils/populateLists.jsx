export const populateLargeCard = (React, Link, array, CardComponent, rest) => {
  return array.map((breed) => {
    const { id, name, imgSrc, temperament: temperaments } = breed;
    const cardProps = { id, name, imgSrc, temperaments };
    return (
      <Link
        to={`/${id}`}
        key={breed.id}
        className="card-container drop-shadow hover-zoom--colorize-half"
      >
        <CardComponent {...cardProps} {...rest} />
      </Link>
    );
  });
};

export const populateSmallCard = (React, Link, array, CardComponent, rest) => {
  console.log('array??', array);
  return array
    .filter((e) => e.isAdopted)
    .map((breed) => {
      const { id, name, imgSrc } = breed;
      const cardProps = { id, name, imgSrc };
      return (
        <div className="small-card-container drop-shadow--always-on-hover">
          <CardComponent {...cardProps} {...rest} />
        </div>
      );
    });
};
