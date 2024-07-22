from django.urls import path
from .views import Say, SubmitUserDetails, SubmitDoctorDetails,userRequestingDoctor,LoginView,sendingEmailToNearbyDoctors,CustomRegisterAPIView

urlpatterns = [
    path('', Say.as_view(), name='say'),
    path('submit_user_details/', SubmitUserDetails.as_view(), name='submit_user_details'),
    path('submit_doctor_details/', SubmitDoctorDetails.as_view(), name='submit_doctor_details'),
    path('user_request_for_doctor/',userRequestingDoctor.as_view(),name='user_request_for_doctor'),
    path('api/auth/login/', LoginView.as_view(), name='login'),
    path('register/', CustomRegisterAPIView.as_view(), name='custom_register'),
    path('send_email_to_nearby_doctors_for_help/',sendingEmailToNearbyDoctors.as_view(),name='sendingEmailToNearbyDoctors')
]
     