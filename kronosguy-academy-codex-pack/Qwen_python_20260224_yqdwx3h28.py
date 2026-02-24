# grader/m04-geofence/validate.py
from grader import LabValidator

validator = LabValidator(lab_id="m04-lab-01")
assert validator.geofence_circle.radius == 500  # meters
assert validator.geofence_polygon.points >= 4
assert validator.test_punches(pass_rate=0.95)