import numpy as np


def ratings(input_ratings):
    if sum(input_ratings) == 0:
        rating = 0
    else:
        rating = (400 * (input_ratings[0] - input_ratings[1])) / sum(input_ratings)

    if rating <= -400:
        print("Class F")
    elif -400 < rating <= -200:
        print("Class E")
    elif rating == 0:
        print("Class D")
    elif 0 < rating <= 200:
        print("Class C")
    elif 200 <= rating < 400:
        print("Class B")
    elif rating >= 400:
        print("Class A")

    return int(rating)


input = np.array([10, 4])
print(ratings(input))
