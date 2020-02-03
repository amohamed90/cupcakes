"""Models for Cupcake app."""

from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


def connect_db(app):
    """Connect to database."""

    db.app = app
    db.init_app(app)

class Cupcake(db.Model):
    """Cupcake"""

    __tablename__ = "cupcakes"

    def __repr__(self):
            return f"{self.id} {self.flavor} {self.size} {self.rating} {self.image}"

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    flavor = db.Column(db.String(25), nullable=False, unique=True)
    size = db.Column(db.String(25), nullable=False)
    rating = db.Column(db.Float(), nullable=False)
    image = db.Column(db.Text, nullable=False, default="https://thestayathomechef.com/wp-content/uploads/2017/12/Most-Amazing-Chocolate-Cupcakes-1-small.jpg")


