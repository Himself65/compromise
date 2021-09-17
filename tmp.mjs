import three from 'compromise/three'
import dates from 'compromise/three/dates'

three.plugin(dates)
let doc = three('yeah').debug()
doc.dates()

let obj = {
  eater: [
    -0.50856, 0.43791, -0.26835, -0.575, 0.49762, -0.09757, -1.0918, -0.015505, -0.58196, -0.31471, 0.75878, -0.65259,
    0.1024, 0.055932, 0.23211, 0.14568, -0.53829, -0.54669, -0.31276, 0.12145, 0.82137, -0.80576, -0.10131, -0.64712,
    -0.63694, -0.32919, -0.73994, -0.0091221, 0.047933, 0.23788, 0.43658, 0.34947, 0.46486, -0.082121, 0.34274,
    0.033555, -0.26554, 0.11858, -0.19483, 0.56853, 0.16533, 0.1461, -0.13317, -0.4384, -0.223, -0.44834, 0.41943,
    -0.16917, -0.85059, 0.39891, 0.41918, 0.22125, -0.3511, 0.03354, -0.27916, 0.32181, -0.070739, 0.52959, 0.41697,
    -0.5319, 0.39798, -0.030672, 0.27792, -0.37444, -0.02187, 0.48135, 0.53449, -0.1986, -0.16785, 0.11227, 0.11975,
    0.22436, 0.13277, 0.012653, -0.17554, -0.28991, -0.41706, -0.053177, 0.32347, 0.065324, 0.44516, -0.40149, 0.029031,
    0.66415, 0.16262, 0.12461, 0.01159, 0.21563, 0.31548, 0.18042, 0.30058, 0.26642, -0.3913, 0.33191, 0.034424,
    0.27032, -0.12244, -0.6714, 0.33413, 0.16563, 0.6216, 0.047823, -0.73517, -0.95377, 0.41453, -0.11499, -0.017625,
    0.1389, -0.026384, 0.68745, 0.77272, 0.19854, 0.29673, 0.16117, -0.15518, 0.27982, -0.18425, -0.13002, 0.056762,
    -0.33116, 0.84855, -0.34145, -0.34808, 1.1065, 0.34113, 0.8706, -0.127, 0.08923, 0.006993, 0.44441, -0.014353,
    -0.29824, 0.34037, 0.23116, 0.050038, -0.58139, 0.40711, -0.78941, -0.29674, 0.62803, -0.12982, -0.40785, 0.57816,
    -0.19293, -0.21195, -0.21908, -0.00051502, 0.26165, 0.77797, -0.25447, 0.28631, 0.46702, 0.67038, 0.052189,
    -0.19042, -0.59124, -0.30767, 0.12923, -0.023958, 0.60124, -0.31186, 0.55943, -0.203, 0.27395, 0.25578, -0.21724,
    -0.78338, -0.28355, -0.093039, 0.37705, 0.44201, -0.50188, -0.084591, -0.13498, -0.35816, -0.17155, 0.18479,
    -0.46237, -0.30008, -0.78611, 0.069686, -0.22833, 0.13177, -0.48316, -0.11138, -0.4793, 0.35974, 0.047983, 0.052859,
    0.40598, 0.43484, 0.80727, 0.40739, 0.27814, -0.23294, 0.4584, 0.26776, -0.39428, 0.013866, 0.40155, -0.51843,
    -0.70007, -0.25124, 0.79986, 0.65023, -0.21498, -0.17043, -0.61281, 0.33151, -0.40412, -0.75831, 0.018995, -0.18158,
    0.024838, -0.098424, -0.62652, 0.40463, -0.41246, -0.058812, 0.2413, 0.021468, -0.64457, -0.22301, 0.40496, -1.5077,
    -0.0028852, 0.1351, -0.37596, 0.021114, 0.55472, 0.0047169, 0.068253, -0.11282, 0.078177, -0.19194, 0.088274,
    0.26344, 0.32961, 0.33296, -0.02581, 0.14501, -0.041759, -0.37151, 0.47723, -0.33336, -0.11467, -0.36426, 0.36137,
    0.48426, 0.49021, -0.25449, 0.25076, -0.087872, -0.24675, 0.2167, -0.43589, 0.0097197, 0.54496, 0.27987, 0.34168,
    -0.20124, 0.010432, 0.31395, -0.18078, -0.4831, 0.38037, 0.23215, 0.16896, 0.24402, 0.44474, 0.013936, 0.63582,
    0.41951, 0.31854, -0.17747, -0.30031, -0.65511, 0.084409, 0.20349, -0.13982, 1.375, -0.054458, 0.22227, -0.72059,
    0.36847, 0.0013383, 0.12166, 0.53605, 0.70232, -0.25731, -0.010864, -0.20238, -0.18801, -0.12516, 0.24452,
    -0.020359, -0.026872, -0.014307, -0.075265, -0.53953,
  ],
  eaters: [
    -0.077381, -0.21063, -0.12695, -0.56595, 0.13169, 0.14092, -1.2066, 0.026684, -0.32333, 0.19974, 0.48821, -0.51162,
    0.12746, -0.23146, 0.10137, -0.18005, -0.89356, -0.83654, -0.60472, -0.029257, 0.85635, -0.39814, -0.39928,
    -0.44578, -0.27605, -0.22677, -0.10013, -0.24027, -0.31064, 0.20921, -0.05149, -0.20831, 0.075648, -0.057372,
    -0.14596, 0.24112, -0.30843, 0.33407, -0.26978, 0.13491, 0.063168, 0.62964, -0.11711, -0.47173, 0.0051587, -0.6981,
    0.54762, -0.48885, -0.57676, 0.1331, 0.27817, 0.35848, -0.28457, 0.19711, 0.36117, 0.012672, -0.033805, 0.49056,
    -0.27017, 0.0088485, 0.071191, 0.24853, 0.056818, -0.24789, 0.11069, 0.55539, 0.46915, 0.13069, 0.49031, -0.13369,
    -0.29193, 0.16085, 0.59962, 0.17267, -0.20363, -0.41172, -0.068258, 0.15122, -0.27723, 0.61418, 0.48984, -0.37834,
    0.48995, 0.58491, -0.29876, 0.25034, 0.2158, 0.25275, 0.43276, 0.3535, 0.055834, 0.25108, -0.48595, 0.20563,
    -0.068056, -0.3272, -0.036602, -0.27801, 0.31094, -0.13888, 0.27171, 0.36122, -0.35704, -1.0556, -0.38391, -0.18799,
    0.065938, -0.059663, 0.10771, 0.63085, 0.74664, 0.12033, 0.67176, 0.23671, -0.28349, 0.15264, -0.5063, -0.18026,
    0.23095, -0.19999, 0.6794, -0.38948, -0.43375, 0.22414, 0.009383, 0.89914, 0.25102, 0.15332, -0.3187, -0.099864,
    0.38074, -0.40517, 0.19168, 0.26376, 0.36629, -0.5172, 0.58996, -0.54656, -0.14607, 0.52842, -0.094368, 0.097166,
    0.34236, -0.21616, -0.29974, -0.33021, -0.52205, 0.39017, 1.0511, -0.38827, 0.55951, 0.23449, 0.43042, 0.12307,
    -0.21802, -0.34125, 0.028658, 0.22261, -0.13046, 1.0128, -0.27429, 0.33154, -1.0095, 0.076846, 0.055478, -0.48428,
    -0.93899, -0.56387, -0.2143, 0.65093, 0.13081, 0.15776, -0.013034, -0.28073, -0.57588, -0.45936, 0.19718, -0.069645,
    -0.45461, -0.76, -0.16756, -0.060095, -0.069136, -0.49784, 0.27674, -0.24068, 0.21583, 0.33164, 0.1463, 0.80269,
    0.28438, 0.73651, 0.028594, 0.12636, -0.19843, 0.17524, -0.208, -0.26208, -0.3009, -0.31494, -0.8111, -0.87659,
    -0.48118, -0.12024, 0.34662, -0.29265, -0.3391, -0.42024, 0.12397, -0.38971, -0.32569, 0.28443, 0.18643, -0.21865,
    0.21618, -0.736, -0.131, -0.1625, 0.49027, 0.26757, -0.30283, -0.55696, -0.2308, -0.3698, -0.75008, 0.32929,
    0.27146, 0.20637, 0.00086332, -0.30208, -0.34588, -0.18849, 0.066119, -0.19777, -0.079091, 0.40071, 0.22706,
    -0.17156, 0.17211, 0.093893, 0.17016, 0.063855, 0.17219, 0.26191, -0.21662, -0.20802, -0.26031, 0.29185, 0.50113,
    0.47832, -0.42665, -0.017948, 0.56932, -0.21858, 0.29428, -0.18718, -0.23375, 0.3219, 0.61907, 0.43038, -0.032077,
    0.49816, 0.59151, -0.47807, -0.27142, 0.68298, 0.26138, 0.19685, 0.37259, 0.66632, -0.25986, 0.66098, 0.056324,
    -0.012639, 0.14744, 0.014363, -0.059149, 0.098075, 0.14218, 0.022612, 1.1455, -0.042817, 0.37356, -0.042244,
    -0.30024, 0.38473, 0.42826, 0.25144, 0.63034, -0.62889, 0.032064, -0.077663, 0.30627, 0.21344, 0.18334, 0.0018528,
    -0.4301, 0.1327, -0.28948, -0.68078,
  ],

  barbados: [
    0.57079, 0.4913, 0.4479, 0.10079, -0.17661, 0.088058, -0.59256, -0.46935, 0.14138, -0.11812, 0.10224, -0.34061,
    -0.23612, -0.092249, -0.02149, -0.35646, -0.043022, 0.1796, -0.37709, 0.51098, -0.34822, -0.21796, 0.029144,
    0.050365, 0.48417, -0.083743, -0.11021, -0.77191, 0.14723, -0.056228, 0.78584, -0.20482, 0.044501, -0.14655,
    -0.012814, -0.049088, -0.18662, -0.39212, -0.15919, 0.37744, 0.6836, -0.063199, -0.08389, 0.44688, 0.41284, 0.45066,
    -0.098611, -0.0089267, 0.18593, -0.44074, -0.29813, 0.23325, 0.56831, 0.21459, -0.19002, -0.11617, 0.5187, -0.44505,
    0.048522, -0.59717, -0.047256, -0.19976, 0.29687, 0.077958, -0.07277, 0.31272, 0.47082, 0.44331, -0.34885, 0.59725,
    -0.4041, 0.50261, 0.16673, -0.25469, 0.40028, -0.11177, -0.20221, 0.95, 0.39552, 0.60502, 0.23475, -0.50951,
    -0.16507, -0.39108, -0.20236, 0.40396, 0.24629, -0.99719, -0.26884, 0.31857, -0.60411, 0.033157, -0.32548, -0.29063,
    0.23829, -0.72472, -0.62767, 0.55499, -0.31431, -0.10557, 0.33536, -0.16685, 0.63138, 0.70511, 0.096739, 0.16091,
    -0.31845, 0.10978, -0.0048997, -0.03715, 0.00083473, -0.58429, 0.58153, -0.53149, -0.13379, 0.2363, 0.25437,
    0.52994, 0.31756, 0.018535, 0.14525, 0.99098, -0.31824, -0.43807, -0.19416, -0.0069475, 0.44888, 0.70635, -0.096157,
    0.39585, -0.013877, 0.1364, 0.045672, 0.28927, 0.27917, -0.050462, -0.38006, -0.050646, 0.19884, -0.30539, 0.060996,
    0.27088, -0.91517, 0.20367, 0.001771, 0.29564, 0.06123, 0.14426, -0.30985, -0.83585, 0.10942, 0.024702, 0.56616,
    0.36691, -0.15459, -0.64687, -0.90914, 0.31121, 0.00082661, -0.071934, 0.033249, 0.34585, -0.18579, -0.71595,
    -0.21529, 0.56462, -0.078685, 0.088246, -0.31248, -0.069912, -0.075592, 0.43871, -0.134, -0.18021, 0.17351,
    -0.014484, 0.23055, 0.40713, 0.40563, 0.62845, 0.33016, 0.20879, -0.20753, -0.37675, 0.76589, -0.30302, -0.072677,
    0.16394, -0.094807, -0.85945, 0.39154, 0.06568, -0.2392, -0.089458, -0.26891, -0.26502, 0.12599, 0.3778, -0.45554,
    -0.1611, -0.54411, 0.34263, -0.22506, -0.32667, 0.22215, 0.4655, -0.37011, 0.25105, 0.038618, 0.14922, 0.096175,
    -0.25834, -0.20982, 0.2775, -0.32552, -0.13496, 0.063099, 0.24423, 0.031369, -0.059641, -0.66564, -0.044782,
    0.12133, 0.094176, -1.5444, -0.51449, 0.25776, 0.38466, 0.038579, -0.34426, 0.42648, 0.67365, 0.41123, 0.071215,
    -0.52735, 0.089132, -0.42882, -0.15408, -0.097792, 0.21341, 0.20239, -0.17358, -0.41294, -0.078554, 0.0079179,
    0.15128, 0.27857, -0.14264, 0.42699, 0.21094, 0.35028, -0.27949, 0.26061, -0.12557, -0.2653, -0.27138, -0.050285,
    -0.23725, 0.070409, 0.509, 0.46, -0.61264, 0.1629, 0.25985, 0.49543, -0.040104, -0.46254, -0.2714, 0.066787,
    0.21986, -0.32389, 0.33841, 0.29909, -0.30651, 0.31679, 0.2082, 0.29813, -0.61704, -0.57372, -0.42128, -0.22105,
    0.13907, -0.12787, 0.16586, 0.62358, 0.40692, -0.32461, 0.44349, -0.54908, -0.16096, 0.31668, -0.033733, -0.088244,
    -0.030159, 0.24933, 0.23156, -0.088031, -0.13529, -0.038118, 0.013576,
  ],
}
