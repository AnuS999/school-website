import { createSlice } from '@reduxjs/toolkit';

// Initial State with Sant Atulanand Public School Data
const initialState = {
  schoolName: 'SANT ATULANAND PUBLIC SCHOOL',
  subHeading: 'Varanasi, Uttar Pradesh - 221002 | Affiliated to CBSE, New Delhi',
  
  // Notice Board Initial Items
  notices: [
    {
      id: '1',
      title: 'ANNUAL EXAMINATION SCHEDULE 2026-27 FOR CLASSES IX & XI',
      date: '25-09-2026',
      link: '#',
      isNew: true
    },
    {
      id: '2',
      title: 'REGISTRATION OPEN FOR NURSERY TO CLASS IX SESSION 2026-27',
      date: '18-09-2026',
      link: '#',
      isNew: true
    },
    {
      id: '3',
      title: 'INTER-SCHOOL SPORTS COMPETITION SELECTION NOTICE',
      date: '10-09-2026',
      link: '#',
      isNew: false
    },
    {
      id: '4',
      title: 'TENDER FORM FOR HIRING OF BUSES FOR SCHOOL STUDENTS',
      date: '01-08-2026',
      link: '#',
      isNew: false
    }
  ],

  // Photo Gallery Initial Items
  gallery: [
    {
      id: '1',
      title: 'Annual Cultural Festival & Rhythms of Progress',
      image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: '2',
      title: 'Inter-School Cricket & Sports Talent Hunt',
      image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: '3',
      title: 'Science & Robotics Innovation Exhibition',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: '4',
      title: 'Fit India Yoga & Health Awareness Camp',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80'
    }
  ]
};

const cmsSlice = createSlice({
  name: 'cms',
  initialState,
  reducers: {
    // Action to Add New Notice from Staff CMS Panel
    addNotice: (state, action) => {
      const newNotice = {
        id: Date.now().toString(),
        title: action.payload.title,
        date: action.payload.date || new Date().toLocaleDateString('en-GB'),
        link: action.payload.link || '#',
        isNew: true
      };
      state.notices.unshift(newNotice);
    },

    // Action to Delete Notice by ID
    deleteNotice: (state, action) => {
      state.notices = state.notices.filter((notice) => notice.id !== action.payload);
    },

    // Action to Add New Image to Photo Gallery
    addGalleryImage: (state, action) => {
      const newImage = {
        id: Date.now().toString(),
        title: action.payload.title,
        image: action.payload.image
      };
      state.gallery.unshift(newImage);
    },

    // Action to Delete Image from Photo Gallery by ID
    deleteGalleryImage: (state, action) => {
      state.gallery = state.gallery.filter((item) => item.id !== action.payload);
    },

    // Optional: Action to Update School Name / Subheading dynamically
    updateSchoolInfo: (state, action) => {
      if (action.payload.schoolName) state.schoolName = action.payload.schoolName;
      if (action.payload.subHeading) state.subHeading = action.payload.subHeading;
    }
  }
});

// Exporting Redux Actions
export const { 
  addNotice, 
  deleteNotice, 
  addGalleryImage, 
  deleteGalleryImage, 
  updateSchoolInfo 
} = cmsSlice.actions;

// Exporting Reducer for store configuration
export default cmsSlice.reducer;