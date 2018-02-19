import MaterialYoutube from './models/MaterialYoutube';
import MaterialText from './models/MaterialText';
import MaterialMultipleChoiceQuestion from './models/MaterialMultipleChoiceQuestion';
import LessonMaterial from './models/LessonMaterial';
import Lesson from './models/Lesson';
import CategoryLesson from './models/CategoryLesson';
import Category from './models/Category';
import CategoryRelationship from './models/CategoryRelationship';

const data = {
  findMaterial: function(materialProps) {
    const { material_type, material_id } = materialProps;

    const MaterialModel = {
      MaterialYoutube: MaterialYoutube,
      MaterialText: MaterialText,
      MaterialMultipleChoiceQuestion: MaterialMultipleChoiceQuestion
    }[material_type];

    return MaterialModel.find(material => material.id === material_id);
  },
  findMaterialsByMaterialPropsArray: function(materialPropsArray) {
    const materialsArray = [];
    // don't use Array.filter to retain order
    materialPropsArray.forEach(materialProps => materialsArray.push(this.findMaterial(materialProps)));

    return materialsArray;
  },
  findLessonMaterials: function(lessonId) {
    const lessonMaterialObjects = LessonMaterial.filter(lessonMaterial => lessonMaterial.lesson_id === lessonId);
    // sort by index property
    const sortedlessonMaterialObjects = lessonMaterialObjects.sort((a, b) => a.index - b.index);
    const lessonMaterialProps = sortedlessonMaterialObjects.map(lessonMaterialObject => {
      return { material_type: lessonMaterialObject.material_type, material_id: lessonMaterialObject.material_id };
    });

    return this.findMaterialsByMaterialPropsArray(lessonMaterialProps);
  },
  findLesson: function(id) {
    return Lesson.find(lesson => lesson.id === id);
  },
  findLessonsByIdArray: function(idArray) {
    const lessonsArray = [];
    // don't use Array.filter to retain order
    idArray.forEach(id => lessonsArray.push(this.findLesson(id)));

    return lessonsArray;
  },
  findCategory: function(id) {
    return Category.find(category => category.id === id);
  },
  findCategoriesByIdArray: function(idArray) {
    const categoriesArray = [];
    // don't use Array.filter to retain order
    idArray.forEach(id => categoriesArray.push(this.findCategory(id)));

    return categoriesArray;
  },
  findCategoryChildren: function(categoryId) {
    const categoryRelationshipObjects = CategoryRelationship.filter(categoryRelationship => categoryRelationship.parent_category_id === categoryId);
    // sort by index property
    const sortedCategoryRelationshipObjects = categoryRelationshipObjects.sort((a, b) => a.index - b.index);
    const childCategoryIds = sortedCategoryRelationshipObjects.map(categoryRelationshipObject => categoryRelationshipObject.child_category_id);

    return this.findCategoriesByIdArray(childCategoryIds);
  },
  findCategoryLessons: function(categoryId) {
    const categoryLessonObjects = CategoryLesson.filter(lessonCategory => lessonCategory.category_id === categoryId);
    // sort by index property
    const sortedCategoryLessonObjects = categoryLessonObjects.sort((a, b) => a.index - b.index);
    const categoryLessonIds = sortedCategoryLessonObjects.map(categoryLessonObject => categoryLessonObject.lesson_id);

    return this.findLessonsByIdArray(categoryLessonIds);
  }
};

export default data;
