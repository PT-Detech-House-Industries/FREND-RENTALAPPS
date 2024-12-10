<template>
  <div class="mt-3">
    <div>
      <div class="container mt-4">
        <div class="card mb-3" style="max-width: 480px;">
          <div class="row g-0">
            <div class="col-12">
              <div class="card-body">
                <h3><b>Privacy Policy</b></h3>
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
                    Nihon Uwu ("we", "our", or "us") is committed to protecting your privacy. 
                    This Privacy Policy explains how we collect, use, and share information about you when you use our application.
                  </el-descriptions-item>
                </el-descriptions>

                <el-descriptions title="2. Information We Collect">
                  <el-descriptions-item>
                    <ul>
                      <li><strong>Personal Information:</strong> Information you provide directly, such as name, email address, phone number, etc.</li>
                      <li><strong>Usage Data:</strong> Information about how you interact with the app, including log files, IP addresses, and browsing activity.</li>
                      <li><strong>Device Information:</strong> Details about the device you use to access our app, such as operating system and browser type.</li>
                    </ul>
                  </el-descriptions-item>
                </el-descriptions>

                <el-descriptions title="3. How We Use Your Information">
                  <el-descriptions-item>
                    <p>We may use the information we collect for the following purposes:</p>
                  </el-descriptions-item>
                </el-descriptions>

                <el-descriptions>
                  <el-descriptions-item>
                    <ul>
                      <li>To provide and maintain our services.</li>
                      <li>To improve and personalize the user experience.</li>
                      <li>To communicate with you, including sending updates or promotional offers.</li>
                      <li>To ensure the security and integrity of our application.</li>
                    </ul>
                  </el-descriptions-item>
                </el-descriptions>

                <el-descriptions title="4. Sharing Your Information">
                  <el-descriptions-item>
                    <p>
                      We do not sell or share your personal information with third parties, except in the following circumstances:
                    </p>
                  </el-descriptions-item>
                </el-descriptions>

                <el-descriptions>
                  <el-descriptions-item>
                    <ul>
                      <li>With your consent.</li>
                      <li>With service providers who help us operate and manage our services.</li>
                      <li>To comply with legal obligations or protect our rights.</li>
                    </ul>
                  </el-descriptions-item>
                </el-descriptions>

                <el-descriptions title="5. Your Data Protection Rights">
                  <el-descriptions-item>
                    <p>You have the following rights regarding your data:</p>
                  </el-descriptions-item>
                </el-descriptions>

                <el-descriptions>
                  <el-descriptions-item>
                    <ul>
                      <li>The right to access, update, or delete your personal data.</li>
                      <li>The right to object to the processing of your data.</li>
                      <li>The right to data portability.</li>
                      <li>The right to withdraw consent at any time.</li>
                    </ul>
                  </el-descriptions-item>
                </el-descriptions>

                <el-descriptions>
                  <el-descriptions-item>
                    <p>
                      To exercise these rights, please contact us at 
                      <a href="mailto:support@nihonuwu.com">support@nihonuwu.com</a>.
                    </p>
                  </el-descriptions-item>
                </el-descriptions>

                <el-descriptions title="6. Data Retention">
                  <el-descriptions-item>
                    <p>
                      We will retain your information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, 
                      or as required by law.
                    </p>
                  </el-descriptions-item>
                </el-descriptions>

                <el-descriptions title="7. Security of Your Information">
                  <el-descriptions-item>
                    <p>
                      We implement reasonable security measures to protect your personal information. 
                      However, no method of transmission or storage is completely secure.
                    </p>
                  </el-descriptions-item>
                </el-descriptions>

                <el-descriptions title="8. Third-Party Links">
                  <el-descriptions-item>
                    <p>
                      Our app may contain links to third-party websites or services. We are not responsible for the privacy practices of these third parties. 
                      Please review their privacy policies before providing any information.
                    </p>
                  </el-descriptions-item>
                </el-descriptions>

                <el-descriptions title="9. Updates to This Privacy Policy">
                  <el-descriptions-item>
                    <p>
                      We may update this Privacy Policy from time to time. Any changes will be posted on this page with a new "Last Updated" date.
                      By continuing to use the app, you agree to the updated policy.
                    </p>
                  </el-descriptions-item>
                </el-descriptions>

                <el-descriptions title="10. Contact Us">
                  <el-descriptions-item>
                    <p>
                      If you have any questions about this Privacy Policy or your data, please contact us at:
                    </p>
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
  name: "PrivacyPolicy",
  mounted() {
    document.title = 'Privacy Policy | Nihon Uwu'
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
