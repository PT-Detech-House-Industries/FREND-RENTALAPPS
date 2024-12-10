<template>
  <div class="mt-3">
    <div>
      <div class="container mt-4">
        <div class="card mb-3" style="max-width: 480px;">
          <div class="row g-0">
            <div class="col-12">
              <div class="card-body">
                <h3><b>Cookie Policy</b></h3>
                <p>Last Updated: 10/12/2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mb-5">
      <div class="container mt-4">
        <div class="card mb-3" style="max-width: 480px;">
          <div class="row g-0">
            <div class="col-12">
              <div class="card-body">

                <el-descriptions title="1. Introduction">
                  <el-descriptions-item>
                    Nihon Uwu ("we", "our", or "us") uses cookies and similar technologies to enhance your experience with our application.
                    This Cookie Policy explains what cookies are, how we use them, and how you can control their use.
                  </el-descriptions-item>
                </el-descriptions>

                <el-descriptions title="2. What Are Cookies?">
                  <el-descriptions-item>
                    Cookies are small text files stored on your device when you visit a website or use an application. 
                    They are widely used to make websites or applications work more efficiently, as well as to provide information to the site/application owners.
                  </el-descriptions-item>
                </el-descriptions>

                <el-descriptions title="3. Types of Cookies We Use">
                  <el-descriptions-item>
                    <ul>
                      <li><strong>Essential Cookies:</strong> Necessary for the basic functioning of the application and cannot be disabled.</li>
                      <li><strong>Performance Cookies:</strong> Help us analyze how users interact with the application to improve its functionality.</li>
                      <li><strong>Functional Cookies:</strong> Allow us to remember your preferences, such as language settings.</li>
                      <li><strong>Advertising Cookies:</strong> Used to deliver advertisements relevant to your interests.</li>
                    </ul>
                  </el-descriptions-item>
                </el-descriptions>

                <el-descriptions title="4. How We Use Cookies">
                  <el-descriptions-item>
                    <p>We use cookies to:</p>
                  </el-descriptions-item>
                </el-descriptions>

                <el-descriptions>
                  <el-descriptions-item>
                    <ul>
                      <li>Provide essential features and services.</li>
                      <li>Analyze usage data to improve the application.</li>
                      <li>Remember your preferences and settings.</li>
                      <li>Deliver personalized advertisements, if applicable.</li>
                    </ul>
                  </el-descriptions-item>
                </el-descriptions>

                <el-descriptions title="5. Managing Your Cookie Preferences">
                  <el-descriptions-item>
                    <p>
                      You can manage or disable cookies through your browser settings. However, please note that disabling certain cookies may affect the functionality of the application.
                    </p>
                  </el-descriptions-item>
                </el-descriptions>

                <el-descriptions>
                  <el-descriptions-item>
                    <p>
                      To learn more about managing cookies, refer to your browser's help documentation or visit 
                      <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener">All About Cookies</a>.
                    </p>
                  </el-descriptions-item>
                </el-descriptions>

                <el-descriptions title="6. Third-Party Cookies">
                  <el-descriptions-item>
                    We may allow third-party service providers, such as analytics and advertising partners, to use cookies in our application. 
                    These third parties may collect information about your online activities over time and across different websites or applications.
                  </el-descriptions-item>
                </el-descriptions>

                <el-descriptions title="7. Changes to This Cookie Policy">
                  <el-descriptions-item>
                    <p>
                      We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. 
                      Any updates will be posted on this page with a new "Last Updated" date.
                    </p>
                  </el-descriptions-item>
                </el-descriptions>

                <el-descriptions title="8. Contact Us">
                  <el-descriptions-item>
                    <p>If you have any questions about this Cookie Policy or how we use cookies, please contact us at:</p>
                  </el-descriptions-item>
                </el-descriptions>

                <el-descriptions>
                  <el-descriptions-item>
                    <ul>
                      <li>Email: <a href="mailto:support@nihonuwu.com">support@nihonuwu.com</a></li>
                      <li>Address: Surabaya</li>
                    </ul>
                  </el-descriptions-item>
                </el-descriptions>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CookiePolicy",
  mounted() {
    document.title = 'Cookie Policy | Nihon Uwu'
  }
};
</script>

<style>
.el-descriptions-item__label.has-colon::after {
  content: '';
  position: relative;
  top: -.5px;
}
</style>
