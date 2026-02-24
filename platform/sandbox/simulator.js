/* SOVEREIGN SIMULATOR LOGIC */
const Simulator = {
    state: {},

    init() {
        console.log("SIMULATOR_CORE: INITIALIZING_STATE...");
        this.loadInitialState();
        this.updatePreview();
        this.bindEvents();
    },

    loadInitialState() {
        if (window.location.pathname.includes('pay_rule_simulator')) {
            this.state = {
                payRuleName: "Master_Sovereign_PayRule",
                overtimeThreshold: 40,
                holidayCredit: true,
                lastSync: new Date().toISOString()
            };
        } else if (window.location.pathname.includes('rounding_rule_simulator')) {
            this.state = {
                roundingRuleName: "Standard_Nearest_15m",
                roundingInterval: 15,
                roundingDirection: "nearest",
                gracePeriod: 3,
                lastSync: new Date().toISOString()
            };
        }
    },

    bindEvents() {
        // Handle input changes
        document.querySelectorAll('.sim-input').forEach(input => {
            input.addEventListener('change', (e) => {
                const key = e.target.id;
                const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
                this.updateState(key, value);
            });
        });

        // Handle button actions
        const saveBtn = document.getElementById('sim-save');
        if (saveBtn) {
            saveBtn.onclick = () => this.saveConfig();
        }
    },

    updateState(key, value) {
        this.state[key] = value;
        this.state.lastSync = new Date().toISOString();
        this.updatePreview();
        console.log(`STATE_UPDATE: ${key} -> ${value}`);
    },

    updatePreview() {
        const preview = document.getElementById('config-preview');
        if (preview) {
            preview.textContent = JSON.stringify(this.state, null, 2);
        }
    },

    saveConfig() {
        const feedback = document.getElementById('sim-feedback');
        if (feedback) {
            feedback.style.display = 'block';
            feedback.innerHTML = `<span style="color: green;">[OK] CONFIGURATION_IMMUTABLE_SAVED</span><br>State ID: ${Math.random().toString(36).substr(2, 9)}`;
            setTimeout(() => { feedback.style.display = 'none'; }, 3000);
        }
    }
};

document.addEventListener('DOMContentLoaded', () => Simulator.init());
