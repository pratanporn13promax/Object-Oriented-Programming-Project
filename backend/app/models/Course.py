import random
from .CourseChapter import CourseChapter
image = [
  {
    "src": "https://fireship.io/courses/react-next-firebase/img/featured.png"
  },
  {
    "src": "https://fireship.io/courses/js/img/featured.webp"
  },
  {
    "src": "https://fireship.io/courses/supabase/img/featured.webp"
  },
  {
    "src": "https://fireship.io/courses/flutter-firebase/img/featured.webp"
  } 
]
class Course():
    id_counter = 1
    def __init__(self,name,short_description,date,language,purpose,chapter,requirement,description,target,price,promotion,info,categories,instructor):
        self._id = Course.id_counter
        self._name = name
        self._short_description = short_description
        self._date = date
        self._language = language
        self._purpose = purpose
        self._chapter = []
        self._requirement = requirement
        self._description = description
        self._target = target
        self._price = price
        self._promotion = promotion
        self._info = info
        self._categories = categories
        self._instructor = instructor
        Course.id_counter += 1
        self._image = image[random.randint(0,3)].get("src")
    @property
    def id(self):
        return self._id
    @property
    def name(self):
        return self._name
    @property
    def short_description(self):
        return self._short_description
    @property
    def date(self):
        return self._date
    @property
    def language(self):
        return self._language
    @property
    def purpose(self):
        return self._purpose
    @property
    def chapter(self):
        return self._chapter
    @property
    def requirement(self):
        return self._requirement
    @property
    def description(self):
        return self._description
    @property
    def target(self):
        return self._target
    @property
    def price(self):
        return self._price
    @property
    def promotion(self):
        return self._promotion
    @property
    def info(self):
        return self._info
    @property
    def categories(self):
        return self._categories
    @property
    def instructor(self):
        return self._instructor
    @property
    def image(self):
        return self._image
    @id.setter
    def id(self,id):
        self._id = id
        return self._id
    
    def add_chapter(self,chapter):
        self.chapter.append(chapter)

class StudentCourse(Course):
    def __init__(self,name,short_description,date,language,purpose,chapter,requirement,description,target,price,promotion,info,categories,instructor,all_progress):
        super().__init__(self,name,short_description,date,language,purpose,chapter,requirement,description,target,price,promotion,info,categories,instructor)
        self.__all_progress = []
    @property
    def all_progress(self):
        return self.__all_progress
    @all_progress.setter
    def all_progress(self,all_progress):
        self.__all_progress = all_progress
        return self.__all_progress
    
    def add_course_to_StudentCourse(self,course):
        self.courses.append(course)
