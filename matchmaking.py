class Implementation:
    """
    A class that represents an implementation of the Elo Rating System
    """

    def __init__(self, base_rating=1000):
        """
        Runs at initialization of class object.
        @param base_rating - The rating a new tutor would have
        """
        self.base_rating = base_rating
        self.tutors = []

    def __gettutorList(self):
        """
        Returns this implementation's tutor list.
        @return - the list of all tutor objects in the implementation.
        """
        return self.tutors

    def gettutor(self, name):
        """
        Returns the tutor in the implementation with the given name.
        @param name - name of the tutor to return.
        @return - the tutor with the given name.
        """
        for tutor in self.tutors:
            if tutor.name == name:
                return tutor
        return None

    def contains(self, name):
        """
        Returns true if this object contains a tutor with the given name.
        Otherwise returns false.
        @param name - name to check for.
        """
        for tutor in self.tutors:
            if tutor.name == name:
                return True
        return False

    def addtutor(self, name, rating=None):
        """
        Adds a new tutor to the implementation.
        @param name - The name to identify a specific tutor.
        @param rating - The tutor's rating.
        """
        if rating == None:
            rating = self.base_rating

        self.tutors.append(_tutor(name=name,rating=rating))

    def removetutor(self, name):
        """
        Adds a new tutor to the implementation.
        @param name - The name to identify a specific tutor.
        """
        self.__gettutorList().remove(self.gettutor(name))


    def recordMatch(self, name1, name2, positive=None, noRating=False):
        """
        Should be called after a game is played.
        @param name1 - name of the first tutor.
        @param name2 - name of the second tutor.
        """
        tutor1 = self.gettutor(name1)
        tutor2 = self.gettutor(name2)

        expected1 = tutor1.compareRating(tutor2)
        expected2 = tutor2.compareRating(tutor1)
        
        k = len(self.__gettutorList()) * 42

        rating1 = tutor1.rating
        rating2 = tutor2.rating

        if noRating:
            score1 = 0.5
            score2 = 0.5
        elif positive == name1:
            score1 = 1.0
            score2 = 0.0
        elif positive == name2:
            score1 = 0.0
            score2 = 1.0
        else:
            raise InputError('One of the names must be the positive or noRating must be True')

        newRating1 = rating1 + k * (score1 - expected1)
        newRating2 = rating2 + k * (score2 - expected2)

        if newRating1 < 0:
            newRating1 = 0
            newRating2 = rating2 - rating1

        elif newRating2 < 0:
            newRating2 = 0
            newRating1 = rating1 - rating2

        tutor1.rating = newRating1
        tutor2.rating = newRating2

    def gettutorRating(self, name):
        """
        Returns the rating of the tutor with the given name.
        @param name - name of the tutor.
        @return - the rating of the tutor with the given name.
        """
        tutor = self.gettutor(name)
        return tutor.rating

    def getRatingList(self):
        """
        Returns a list of tuples in the form of ({name},{rating})
        @return - the list of tuples
        """
        lst = []
        for tutor in self.__gettutorList():
            lst.append((tutor.name,tutor.rating))
        return lst

class _tutor:
    """
    A class to represent a tutor in the Elo Rating System
    """

    def __init__(self, name, rating):
        """
        Runs at initialization of class object.
        @param name - TODO
        @param rating - TODO
        """
        self.name = name
        self.rating = rating

    def compareRating(self, student):
        """
        Compares the two ratings of the this tutor and the student.
        @param student - the tutor to compare against.
        @returns - The expected score between the two tutors.
        """
        return ( 1+10**( ( student.rating-self.rating )/400.0 ) ) ** -1
