import React from "react";
import styles from "../../styles/Book.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Media, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";
import { MoreDropdown } from "../../components/MoreDropdown";

const Book = (props) => {
    const {
      title,
      author,
      owner,
      genre,
      language,
      description,
      image,
      star_rating_1,
      star_rating_2,
      star_rating_3,
      star_rating_4,
      star_rating_5,
      created_at,
      updated_at,
    } = props;

const currentUser = useCurrentUser();
const is_owner = currentUser?.username === owner;
const history = useHistory();
  
const handleEdit = () => {
      history.push(`/books/${id}/edit`);
    };
  
const handleDelete = async () => {
      try {
        await axiosRes.delete(`/books/${id}/`);
        history.goBack();
      } catch (err) {
        //console.log(err);
      }
    };
    return (
        <Card className={styles.Book}>
          <Card.Body>
            <Media className="align-items-center justify-content-between">
              <Link to={`/profiles/${profile_id}`}>
                <Avatar src={profile_image} height={55} />
                {owner}
              </Link>
              <div className="d-flex align-items-center">
                <span>{updated_at}</span>
                {is_owner && reviewPage && (
                  <MoreDropdown
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                  />
                )}
              </div>
            </Media>
          </Card.Body>
          <Link to={`/books/${id}`}>
            <Card.Img src={image} alt={title} />
          </Link>
          <Card.Body>
            {title && <Card.Title className="text-center">{title}</Card.Title>}
            {author && <Card.Text>{author}</Card.Text>}
            {owner && <Card.Text className="text-center">{owner}</Card.Text>}
            {genre && <Card.Text>{genre}</Card.Text>}
            {language && <Card.Text>{language}</Card.Text>}
            {description && <Card.Text>{description}</Card.Text>}
            {star_rating_1 && <Card.arguments>{star_rating_1}</Card.arguments>}
            {star_rating_2 && <Card.arguments>{star_rating_2}</Card.arguments>}
            {star_rating_3 && <Card.arguments>{star_rating_3}</Card.arguments>}
            {star_rating_4 && <Card.arguments>{star_rating_4}</Card.arguments>}
            {star_rating_5 && <Card.arguments>{star_rating_5}</Card.arguments>}
          </Card.Body>
        </Card>
      );
    };
    
export default Book; 