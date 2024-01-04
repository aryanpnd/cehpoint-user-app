import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeBaseProvider } from "native-base";
import * as React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import CheckUser from "./src/pages/CheckUser";
import ClienttCheck from "./src/pages/client/ClientCheck";
import Complain from "./src/pages/client/Complain";
import FromClienttId from "./src/pages/client/newClient/FormClientId";
import Gift from "./src/pages/client/newClient/Gift";
import NewClientForm from "./src/pages/client/newClient/NewClientForm";
import NewCLientId from "./src/pages/client/newClient/NewClientId";
import WelcomeClient from "./src/pages/client/newClient/WelcomeClient";
import FromOldCLient from "./src/pages/client/oldClient/FormOldClient";
import CompanyDetailsForm from "./src/pages/CompanyDetailsForm";
import CommunityPool from "./src/pages/explore/CommunityPool";
import Explore from "./src/pages/explore/Explore";
import AppDevIntDetails from "./src/pages/explore/internship-details/AppDevIntDetails";
import ContentResearchIntDetails from "./src/pages/explore/internship-details/ContentResearchIntDetails";
import CyberSecurityIntDetails from "./src/pages/explore/internship-details/CyberSecurityIntDetails";
import InternshipForm from "./src/pages/explore/internship-details/InternshipForm";
import MarketingIntDetails from "./src/pages/explore/internship-details/MarketingIntDetails";
import UiUxDesignIntDetails from "./src/pages/explore/internship-details/UiUxDesignIntDetails";
import WebDevIntDetails from "./src/pages/explore/internship-details/WebDevIntDetails";
import AppDevJobDetails from "./src/pages/explore/job-details/AppDevJobDetails";
import CyberSecurityJobDetails from "./src/pages/explore/job-details/CyberSecurityJobDetails";
import CyberSpecJobDetails from "./src/pages/explore/job-details/CyberSpecJobDetaila";
import DevsecopsJobDetails from "./src/pages/explore/job-details/DevsecopsJobDetails";
import JobForm from "./src/pages/explore/job-details/JobForm";
import MarketSpecJobDetails from "./src/pages/explore/job-details/MarketSpecJobDetaila";
import WebDevJobDetails from "./src/pages/explore/job-details/WebDevJobDetails";
import JobCategory from "./src/pages/explore/JobCategory";
import JobsAndIntern from "./src/pages/explore/JobsAndIntern";
import MyApplication from "./src/pages/explore/MyApplication";
import PostInternForm from "./src/pages/explore/PostInternForm";
import PostJobForm from "./src/pages/explore/PostJobForm";
import SuccessfulJobPost from "./src/pages/explore/SuccessfulJobPost";
import Home from "./src/pages/Home";
import Login from "./src/pages/Login";
import SignUp from "./src/pages/SignUp";
import Course from "./src/pages/student/newStudent/Course";
import FromProspectId from "./src/pages/student/newStudent/FromProspectId";
import NewStudentForm from "./src/pages/student/newStudent/NewStudentForm";
import ProspectId from "./src/pages/student/newStudent/ProspectId";
import Que1NewStudent from "./src/pages/student/newStudent/Que1NewStudent";
import Que2NewStudent from "./src/pages/student/newStudent/Que2NewStudent";
import Que3NewStudent from "./src/pages/student/newStudent/Que3NewStudent";
import ReportClient from "./src/pages/student/newStudent/ReportClient";
import WelcomeCpoint from "./src/pages/student/newStudent/WelcomeCpoint";
import OldStudentForm from "./src/pages/student/oldStudent/OldStudentForm";
import StudentCheck from "./src/pages/student/StudentCheck";

const Stack = createNativeStackNavigator();
export const ApiURL = 'http://18.191.238.75:5000';

export default function App() {
  return (
    <SafeAreaProvider>
      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="check-user"
          >
            <Stack.Screen name="check-user" component={CheckUser} />
            <Stack.Screen name="check-student" component={StudentCheck} />
            <Stack.Screen name="student-que1" component={Que1NewStudent} />
            <Stack.Screen name="student-que2" component={Que2NewStudent} />
            <Stack.Screen name="student-que3" component={Que3NewStudent} />
            <Stack.Screen name="student-form" component={NewStudentForm} />
            <Stack.Screen name="prospect-id" component={ProspectId} />
            <Stack.Screen name="from-prospect-id" component={FromProspectId} />
            <Stack.Screen name="welcome-cehpoint" component={WelcomeCpoint} />
            <Stack.Screen name="course" component={Course} />
            <Stack.Screen name="check-client" component={ClienttCheck} />
            <Stack.Screen name="client-form" component={NewClientForm} />
            <Stack.Screen name="client-id" component={NewCLientId} />
            <Stack.Screen name="form-client-id" component={FromClienttId} />
            <Stack.Screen name="welcome-client" component={WelcomeClient} />
            <Stack.Screen name="client-report" component={ReportClient} />
            <Stack.Screen name="gift" component={Gift} />
            <Stack.Screen name="form-old-client" component={FromOldCLient} />
            <Stack.Screen name="old-student-form" component={OldStudentForm} />
            <Stack.Screen name="explore" component={Explore} />
            <Stack.Screen name="jobs-and-intern" component={JobsAndIntern} />
            <Stack.Screen name="web-dev-details" component={WebDevJobDetails} />
            <Stack.Screen name="app-dev-details" component={AppDevJobDetails} />
            <Stack.Screen
              name="market-specialist-details"
              component={MarketSpecJobDetails}
            />
            <Stack.Screen
              name="cyber-specialist-details"
              component={CyberSpecJobDetails}
            />
            <Stack.Screen
              name="devsecops-details"
              component={DevsecopsJobDetails}
            />
            <Stack.Screen
              name="cyber-security-details"
              component={CyberSecurityJobDetails}
            />
            <Stack.Screen
              name="marketing-intern-details"
              component={MarketingIntDetails}
            />
            <Stack.Screen
              name="uiux-intern-details"
              component={UiUxDesignIntDetails}
            />
            <Stack.Screen
              name="cyber-security-intern-details"
              component={CyberSecurityIntDetails}
            />
            <Stack.Screen
              name="app-dev-intern-details"
              component={AppDevIntDetails}
            />
            <Stack.Screen
              name="web-dev-intern-details"
              component={WebDevIntDetails}
            />
            <Stack.Screen
              name="content-intern-details"
              component={ContentResearchIntDetails}
            />
            <Stack.Screen name="internship-form" component={InternshipForm} />
            <Stack.Screen name="job-form" component={JobForm} />
            <Stack.Screen name="login" component={Login} />
            <Stack.Screen name="signup" component={SignUp} />
            <Stack.Screen name="my-application" component={MyApplication} />
            <Stack.Screen name="community-pool" component={CommunityPool} />
            <Stack.Screen name="job-category" component={JobCategory} />
            <Stack.Screen name="job-post-form" component={PostJobForm} />
            <Stack.Screen name="job-intern-form" component={PostInternForm} />
            <Stack.Screen
              name="success-job-post"
              component={SuccessfulJobPost}
            />
            <Stack.Screen
              name="company-details-form"
              component={CompanyDetailsForm}
            />
            <Stack.Screen name="complain" component={Complain} />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </SafeAreaProvider>
  );
}
