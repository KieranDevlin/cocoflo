import React from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import GetAppIcon from '@material-ui/icons/GetApp';
import VisibilityIcon from '@material-ui/icons/Visibility';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import moment from 'moment';
import './styles.scss';

const UnsplashCard = ({ unsplashData, isLoading }) => {
  return (
    <>
      {unsplashData ? (
        <div className="unsplash-card">
          <header>
            <a href={unsplashData?.user?.links?.html}>
              <img
                className="profile-pic"
                src={unsplashData?.user?.profile_image.large}
                alt={
                  unsplashData ? unsplashData?.user?.bio : 'No profile image'
                }
              />
            </a>
            <div className="unsplash-post-info">
              <h1>{unsplashData?.user?.username}</h1>
              <span>{moment(unsplashData?.created_at).fromNow()}</span>
            </div>
          </header>
          <main>
            <div className="unsplash-img-container">
              <a href={unsplashData?.links?.html}>
                <img
                  className="unsplash-img"
                  src={`${unsplashData?.urls?.regular}&fit=fillmax`}
                  alt={
                    unsplashData
                      ? unsplashData?.alt_description
                      : 'No image found'
                  }
                />
              </a>
            </div>
            <div className="unsplash-content">
              <div className="unsplash-stats">
                <span>
                  <FavoriteIcon />
                  {unsplashData?.likes}
                </span>
                <span>
                  <VisibilityIcon />
                  {unsplashData?.views}
                </span>

                <span>
                  <GetAppIcon />
                  {unsplashData?.downloads}
                </span>
              </div>
              <p className="unsplash-caption">
                {unsplashData?.alt_description}
              </p>

              {unsplashData?.location?.title && (
                <p className="unsplash-location">
                  <LocationOnIcon />
                  {unsplashData?.location.title}
                </p>
              )}
            </div>
          </main>
        </div>
      ) : (
        <div className="unsplash-card unsplash-card-no-data">
          {isLoading ? (
            <img src={require('../../assets/loading.gif')} />
          ) : (
            <span>No data</span>
          )}
        </div>
      )}
    </>
  );
};

export default UnsplashCard;
